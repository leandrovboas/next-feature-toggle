import { useContext } from "react"
import { FeatureToggleContext } from "../context/FeatureToggleContext"

export const useFeatureToggle = () => {
  const { disabledFeatures } = useContext(FeatureToggleContext);

  const isDisabled = ( featureName: string ) => {
    return disabledFeatures.includes(featureName)
  }

  return [
    isDisabled
  ]
}