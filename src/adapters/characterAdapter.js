
export const characterAdapter = (data) => {

    const dataFormat = {
        name: "",
        species: "",
        gender: "",
        house: "",
        dateOfBirth: "00-00-0000",
        yearOfBirth: 0,
        ancestry: "",
        eyeColour: "",
        hairColour: "",
        wand: {
          wood: "",
          core: "",
          length: 0
        },
        patronus: "",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Daniel Radcliffe",
        alive: true,
        image: "",
        favorite: false,
        type: "",
        ...data,
    }
    
    return dataFormat;
}