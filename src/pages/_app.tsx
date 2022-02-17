import { useEffect, useState } from "react";
import { FeatureToggle } from "../components/FeatureToggle";
import { fetchDisabledFeatures } from "../services/FeatureToggle";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [enabledFeatures, setFeatures] = useState<string[]>([]);
  const [disabledFeatures, setDisabledFeatures] = useState<string[]>([]);

  const processFeatures = async () => {
    const disabledFeatures = await fetchDisabledFeatures();
    setDisabledFeatures(disabledFeatures);
  };

  useEffect(() => {
    processFeatures();
  }, []);

  return (
    <FeatureToggle disabledFeatures={disabledFeatures}>
      <Component {...pageProps} />
    </FeatureToggle>
  );
}

export default MyApp;
