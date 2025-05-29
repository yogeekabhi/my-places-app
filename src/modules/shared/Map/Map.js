import React, { useEffect, useRef } from "react";
import "./Map.css";

const Map = (props) => {
	const mapRef = useRef();

	useEffect(() => {
		const map = new window.google.maps.Map(mapRef.current, {
			center: props.center,
			zoom: props.zoom,
			mapId: "DEMO_MAP_ID"
		});
		console.log(window.google.maps.marker, props);
		new window.google.maps.marker.AdvancedMarkerElement({
			position: props.center,
			map: map,
			title: "Places"
		});
	}, [props.center, props.zoom]);

	return (
		<div
			ref={mapRef}
			className={`map ${props.className}`}
			style={props.style}
		></div>
	);
};

export default Map;
