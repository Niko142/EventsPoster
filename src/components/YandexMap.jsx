import { useEffect, useRef } from "react";

const YandexMap = () => {
  const scriptRef = useRef(null);
  const locationMap = useRef();

  useEffect(() => {
    if (!scriptRef.current) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.charset = "utf-8";
      script.async = true;
      script.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A51ba9691caad21af4af446d636789097e6eb11d17ef54c8ecc960e827682157b&amp;width=600&amp;height=445&amp;lang=ru_RU&amp;scroll=true`;
      scriptRef.current = script;
      locationMap.current.append(script);
    }

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className="contact-location-map"
      ref={locationMap}
      style={{ width: "600px", height: "400px" }}
    ></div>
  );
};

export default YandexMap;
