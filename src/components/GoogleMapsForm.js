// src/components/GoogleMapsForm.js

import React, { useEffect } from 'react';

const GoogleMapsForm = () => {
  useEffect(() => {
    // Initialize Google Maps API script
    const initMap = () => {
      // Create map instance
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.911718, lng: 151.195499 }, // Coordinates for B1/13-21 Mandible St Alexandria NSW 2015, Australia
        zoom: 15,
      });

      // Create a marker and position it
      new window.google.maps.Marker({
        position: { lat: -33.911718, lng: 151.195499 }, // Coordinates for B1/13-21 Mandible St Alexandria NSW 2015, Australia
        map,
        title: 'Sabrenetics Location', // Marker tooltip text
      });
    };

    // Load Google Maps API script dynamically
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=KEY_GOES_HERE`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    googleMapsScript.onload = initMap; // Call initMap() once script is loaded
    document.head.appendChild(googleMapsScript);

    // Clean up
    return () => {
      document.head.removeChild(googleMapsScript); // Remove script from DOM on unmount
    };
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default GoogleMapsForm;
