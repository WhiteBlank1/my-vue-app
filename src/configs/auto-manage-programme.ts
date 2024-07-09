import auto1 from "@assets/auto1.png"
import auto2 from "@assets/auto2.png"

interface FormData {
  lengthField: number | undefined;
  manppower: number | undefined;
  widthField: number | undefined;
  deploymentPeriods: number | undefined;
  operatingTheatre: number | undefined;
  intensiceCare: number | undefined;
  sterilizer: number | undefined;
  ctScanner: number | undefined;
  wardTent: number | undefined;
  connectingTents: number | undefined;
  powerGeneration: number | undefined;
  waterTankers: number | undefined;
}

interface AutoManageProgramme {
  formData: FormData | {};
  img: string | undefined;
}

const AUTO_MANAGE_PROGRAMME: Array<AutoManageProgramme> = [
  {
    formData: {
      lengthField: 50,
      manppower: 8,
      widthField: 30,
      deploymentPeriods: 120,
      operatingTheatre: 1,
      intensiceCare: 2,
      sterilizer: 1,
      ctScanner: 1,
      wardTent: 2,
      connectingTents: 14,
      powerGeneration: 2,
      waterTankers: 2,
    },
    img: auto1,
  },
  {
    formData: {
      lengthField: 40,
      manppower: 8,
      widthField: 40,
      deploymentPeriods: 120,
      operatingTheatre: 2,
      intensiceCare: 1,
      sterilizer: 1,
      ctScanner: 1,
      wardTent: 3,
      connectingTents: 14,
      powerGeneration: 2,
      waterTankers: 2,
    },
    img: auto2,
  },
]

export default AUTO_MANAGE_PROGRAMME; 