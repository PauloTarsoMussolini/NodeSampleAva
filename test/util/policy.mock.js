const dateNow = new Date();
let date360DaysFuture = dateNow;
date360DaysFuture.setDate(date360DaysFuture.getDate() + 360);
const bithDate = new Date(2000, 1, 1);

const policy = ({
  mutual: {
    wallets: ["0x5014D9B0C587b25a54b587Cb36e789d00f22b28c"]
  },
  coverage: {
    prizeAmount: '1000',
    fipePercentage: 'Fipe5',
    app: 'App1',
    glasses: 'Glas1',
    rcfMaterials: 'rcfM1',
    rcfBodily: 'rcfB1',
    reserveCar: 'reserve1',
    franchise: 'fr1',
    productCoverage: [
      'p1', 'p2'
    ]
  },
  policyInformation: {
    proposal: 'proposal1',
    apolice: 'policy1',
    startValidity: dateNow.getTime(),
    endValidity: date360DaysFuture.getTime(),
    apoliceStatus: 'valid'
  },
  policyHoldedrData: {
    nameComplete: 'client',
    dateOfBirth: bithDate.getTime(),
    maritalStatus: 'married',
    pocket: 'pocket1',
    cnpjCpf: 'cpf11111111111',
    gender: 'male',
    relationshipPolicyHolder: 'rsph1'
  },
  vehicleData: {
    typeParam: 'type1',
    marker: 'ford',
    model: 'ka',
    numerSlides: '1',
    yearManufacture: '2000',
    yearModel: '2001',
    licensePlate: 'Placa11111',
    chassis: 'chassi1111111111',
    renavam: 'rnv1111111111',
    fuel: 'hibrid',
    newVehicle: 'new',
    vehicleFinaced: 'financed',
    color: 'White'
  },
  driverData: {
    nameComplete: 'Driver Name',
    dateOfBirth: bithDate.getTime(),
    maritalStatus: 'divorced',
    pocket: 'pock1',
    cpfCnpj: 'cpf111111111111',
    gender: 'female',
    profession: 'developer',
    cnh: 'cnh111111',
    dateFirstCnh: bithDate.getTime(),
    garage: 'garage1',
    usesWork: 'usesW1',
    vehicleUse: 'vuse1'
  }
});

module.exports = policy;