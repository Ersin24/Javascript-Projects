class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  
    static generatePassword(){
      let password = Math.floor(Math.random()*10000);
      return password;
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);
  console.log(HospitalEmployee.generatePassword())


  class Doctor extends HospitalEmployee{
    constructor(name, insurance){
        super(name);
        this._insurance = insurance;
    }
    get insurance(){
        return this._insurance;
    }
    static oneUpFour(){
        return Math.floor(Math.random()* 4)
    }
  }
console.log('---------------')
  const ersinDoctor = new Doctor('Ersin', ['Html', 'Css', 'Js'])
  console.log(ersinDoctor.name);
  console.log(ersinDoctor.insurance);
  ersinDoctor.takeVacationDays(12);
  console.log(ersinDoctor.remainingVacationDays);