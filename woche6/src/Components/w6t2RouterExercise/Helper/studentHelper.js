
export function getUser(alleStudenten, param){
    //die parameter oben sind nur die rucksackträger...
    const result = alleStudenten.filter(
        (student) => student.login.uuid === param.id
      );
      //muss den wert auch zurück geben, ansonsten bleibt dieser in der funktion gefangen
      return result
}
