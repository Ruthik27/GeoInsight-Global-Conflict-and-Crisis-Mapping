

$(document).ready(function() {
  var allData = [];
  var map = L.map('map').setView([0, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  var markers = L.markerClusterGroup().addTo(map);

  $('#disorderType, #eventType, #subEventType, #year, #country, #region').select2({
    placeholder: "Select an option",
    allowClear: true,
    multiple: true
  });

  $.get('/events', function(data) {
    console.log("Data fetched from server:", data);
    allData = data.data;
    populateDropdowns(allData);
    updateMap(allData);
  }).fail(function(error) {
    console.error("Error fetching data: ", error);  
  });

  $('.filter-select').on('change', onFilterChange);

  function populateDropdowns(data) {
    console.log("Populating dropdowns");
    var filters = {
      '#disorderType': new Set(),
      '#eventType': new Set(),
      '#subEventType': new Set(),
      '#year': new Set(),
      '#country': new Set(),
      '#region': new Set()
    };

    data.forEach(event => {
      filters['#disorderType'].add(event.disorder_type);
      filters['#eventType'].add(event.event_type);
      filters['#subEventType'].add(event.sub_event_type);
      filters['#year'].add(String(event.year));
      filters['#country'].add(event.country);
      filters['#region'].add(event.region);
    });

    for (const [key, value] of Object.entries(filters)) {
      const select = $(key);
      select.empty().append(new Option(key.substr(1), ''));
      value.forEach(option => {
        select.append(new Option(option, option));
      });
    }
    console.log("Dropdowns populated");
  }

  function onFilterChange() {
    var currentFilters = {
      disorderType: $('#disorderType').val() || [],
      eventType: $('#eventType').val() || [],
      subEventType: $('#subEventType').val() || [],
      year: $('#year').val() || [],
      country: $('#country').val() || [],
      region: $('#region').val() || []
    };
  
    var filteredData = allData.filter(event => {
      return (currentFilters.disorderType.length === 0 || currentFilters.disorderType.includes(event.disorder_type)) &&
              (currentFilters.eventType.length === 0 || currentFilters.eventType.includes(event.event_type)) &&
              (currentFilters.subEventType.length === 0 || currentFilters.subEventType.includes(event.sub_event_type)) &&
              (currentFilters.year.length === 0 || currentFilters.year.includes(String(event.year))) &&
              (currentFilters.country.length === 0 || currentFilters.country.includes(event.country)) &&
              (currentFilters.region.length === 0 || currentFilters.region.includes(event.region));
    });
  
    updateMap(filteredData);
    updateDropdownOptions(filteredData);
  }

  function filterData() {
    console.log("Filtering data based on selections");
    var selectedDisorderType = $('#disorderType').val() || [];
    var selectedEventType = $('#eventType').val() || [];
    var selectedSubEventType = $('#subEventType').val() || [];
    var selectedYearType = $('#year').val() || [];
    var selectedCountryType = $('#country').val() || [];
    var selectedRegionType = $('#region').val() || [];
    
    var filtered = allData.filter(event => {
      return (selectedDisorderType.length === 0 || selectedDisorderType.includes(event.disorder_type)) &&
              (selectedEventType.length === 0 || selectedEventType.includes(event.event_type)) &&
              (selectedSubEventType.length === 0 || selectedSubEventType.includes(event.sub_event_type)) &&
              (selectedYearType.length === 0 || selectedYearType.includes(String(event.year))) &&
              (selectedCountryType.length === 0 || selectedCountryType.includes(event.country)) &&
              (selectedRegionType.length === 0 || selectedRegionType.includes(event.region)) &&
              !isNaN(parseFloat(event.latitude)) && !isNaN(parseFloat(event.longitude));
    });
  
    console.log(`Filtered Data Count: ${filtered.length}`);
    return filtered;
  }
    

  function updateMap(filteredData) {
    console.log("Updating map with filtered data");
    markers.clearLayers(); // Clear existing markers
    filteredData.forEach(event => {
        // Create a marker and bind a popup with details
        var marker = L.marker([event.latitude, event.longitude])
            .bindPopup(`<b>Event Details:</b><br>
                        <b>Disorder Type:</b> ${event.disorder_type}<br>
                        <b>Event Type:</b> ${event.event_type}<br>
                        <b>Sub Event Type:</b> ${event.sub_event_type}<br>
                        <b>Year:</b> ${event.year}<br>
                        <b>Country:</b> ${event.country}<br>
                        <b>Region:</b> ${event.region}`);
        markers.addLayer(marker); // Add the marker to the marker cluster group
    });
    map.addLayer(markers); // Add the marker cluster group to the map
    console.log("Map updated");
}

  function updateDropdownOptions(filteredData, changedFilterId) {
    var optionsSet = new Set(filteredData.map(event => event[changedFilterId]));
  
    $(`#${changedFilterId}`).empty().append(new Option('Select an option', ''));
    optionsSet.forEach(option => {
      $(`#${changedFilterId}`).append(new Option(option, option));
    });
  }
  
});
