import "./map.css";

const Map = () => {
  return (
    <div className="map container">
        <iframe className="map section-margin"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.946343998562!2d72.9350359510669!3d33.99391192815353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb3d4da08d1db%3A0xd5783962cdeab88e!2sMAC%20Production%20%26%20Graphics!5e0!3m2!1sen!2s!4v1679609573862!5m2!1sen!2s"  height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map;