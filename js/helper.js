var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="contact-category-text">%contact%</span><span class="contact-info-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="contact-category-text">mobile</span><span class="contact-info-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="contact-category-text">email</span><span class="contact-info-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="contact-category-text">twitter</span><span class="contact-info-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="contact-category-text">github</span><span class="contact-info-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="contact-category-text">web</span><span class="contact-info-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="contact-category-text">location</span><span class="contact-info-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" alt="Profile photo" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-heading">Skills at a Glance:</h3><ul id="skills" class="flex-box-space-around"></ul>';
var HTMLskills = '<li class="flex-item"><span class="skills-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ': %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="description-text">%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p class="description-text">%data%</p>';
var HTMLprojectImage = '<img src="%data%" alt="Project photo">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ': %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<p class="major-text">Major: %data%</p>';

var HTMLonlineCourses = '<h3>Online Courses</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ': %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

$(document).ready(function() {
    $('button').click(function() {
        var $name = $('#name');
        var iName = inName($name.text()) || function() {};
        $name.html(iName);
    });
});

var clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {

});

var map;

function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    function locationFinder() {
        var locations = [];


        locations.push(bio.contacts.location);

        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    function createMapMarker(placeData) {

        var lat = placeData.geometry.location.lat();
        var lon = placeData.geometry.location.lng();
        var name = placeData.formatted_address;
        var bounds = window.mapBounds;
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        google.maps.event.addListener(marker, 'click', function() {});
        bounds.extend(new google.maps.LatLng(lat, lon));
        map.fitBounds(bounds);
        map.setCenter(bounds.getCenter());
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    function pinPoster(locations) {

        var service = new google.maps.places.PlacesService(map);

        locations.forEach(function(place) {
            var request = {
                query: place
            };

            service.textSearch(request, callback);
        });
    }

    window.mapBounds = new google.maps.LatLngBounds();

    locations = locationFinder();

    pinPoster(locations);

}

window.addEventListener('load', initializeMap);

window.addEventListener('resize', function(e) {
    map.fitBounds(mapBounds);
});
