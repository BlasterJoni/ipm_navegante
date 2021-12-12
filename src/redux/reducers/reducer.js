export const actionTypes = {
  SetLoggedIn: "[SetLoggedIn] Action",
  UpdateUserInfo: "[UpdateUserInfo] Action",
  SetCurrentPurchase: "[SetCurrentPurchase] Action",
  ClearCurrentPurchase: "[ClearCurrentPurchase] Action",
  AddCard: "[AddCard] Action",
  AddMBWay: "[AddMBWay] Action",
  SetActivePayment: "[SetActivePayment] Action",
  AddTicket: "[AddTicket] Action",
  LogOut: "[LogOut] Action",
  RenewPass: "[RenewPass] Action",
  AddZapping: "[AddZapping] Action"
};

const initialListState = {
  alerts: [
    {
      title: "Bloqueio nas linhas",
      text: "Estacionamento indevido poderá causar atrasos na linha 1.",
      date: new Date(2021, 11, 6, 13, 30, 0, 0),
      operator: "MTS"
    },
    {
      title: "Queda de catenária",
      text: "Queda de catenária irá causar atrasos nos comboios.",
      date: new Date(2021, 11, 6, 12, 11, 0, 0),
      operator: "Fertagus"
    },
    {
      title: "Metereologia",
      text: "Chuva forte poderá criar atrasos nos metros.",
      date: new Date(2021, 11, 6, 10, 32, 0, 0),
      operator: "MTS"
    },
    {
      title: "Metereologia",
      text: "Chuva forte poderá criar atrasos nos comoboios.",
      date: new Date(2021, 11, 6, 10, 24, 0, 0),
      operator: "Fertagus"
    },
    {
      title: "Metereologia",
      text: "Vento e chuva forte poderá criar atrasos nos barcos.",
      date: new Date(2021, 11, 6, 10, 14, 0, 0),
      operator: "TTSL"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos metros.",
      date: new Date(2021, 11, 6, 9, 56, 0, 0),
      operator: "MTS"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos barcos.",
      date: new Date(2021, 11, 6, 9, 52, 0, 0),
      operator: "TTSL"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos comboios.",
      date: new Date(2021, 11, 6, 9, 33, 0, 0),
      operator: "Fertagus"
    }
  ],
  activeUser: null,
  users: {
    "jmods@email.com": {
      user: {
        photo: "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",
        email: "jmods@email.com",
        password: "password",
        foreName: "João Maria",
        surName: "Oliveira da Silva",
        birthdate: "04/08/2000",
        ncc: "9847584754365",
        nif: "000000000",
        nclient: "53425234523452",
        status: {
          profile: "Sub23",
          status: "Válido",
          validity: new Date(2021, 9, 31, 0, 0, 0, 0)
        },
        activePayment: 0,
        payment: [
          {
            type: "Mastercard",
            number: "0000000000000000",
            cvv: "000",
            validity: new Date(2021, 9, 31, 0, 0, 0, 0)
          },
          {
            type: "Visa",
            number: "0000000000000000",
            cvv: "000",
            validity: new Date(2021, 9, 31, 0, 0, 0, 0)
          },
          {
            type: "MBWay",
            number: "960000000"
          }
        ]
      },
      history: [
        {
          operator: "Fertagus",
          type: "Pragal -> Setúbal",
          date: new Date(2021, 10, 28, 17, 30, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 3",
          date: new Date(2021, 10, 28, 17, 30, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2021, 10, 27, 18, 0, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Pragal -> Setúbal",
          date: new Date(2021, 10, 28, 17, 30, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 3",
          date: new Date(2021, 10, 28, 17, 30, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2021, 10, 27, 18, 0, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Pragal -> Setúbal",
          date: new Date(2021, 10, 28, 17, 30, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 3",
          date: new Date(2021, 10, 28, 17, 30, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2021, 10, 27, 18, 0, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 3",
          date: new Date(2021, 10, 28, 17, 30, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2021, 10, 27, 18, 0, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Pragal -> Setúbal",
          date: new Date(2021, 10, 28, 17, 30, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 3",
          date: new Date(2021, 10, 28, 17, 30, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2021, 10, 27, 18, 0, 0, 0)
        },
      ],
      tickets: [
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Pragal -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
          operator: "Fertagus",
          type: "Setúbal -> Pragal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "bede5c4f1bbcc2bfe107f4e845a94233openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "1d24213f609dc357307ba37839c07ac1openplskthxbye",
          operator: "Fertagus",
          type: "Fogueteiro -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Pragal -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
          operator: "Fertagus",
          type: "Setúbal -> Pragal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "bede5c4f1bbcc2bfe107f4e845a94233openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "1d24213f609dc357307ba37839c07ac1openplskthxbye",
          operator: "Fertagus",
          type: "Fogueteiro -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Pragal -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
          operator: "Fertagus",
          type: "Setúbal -> Pragal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "bede5c4f1bbcc2bfe107f4e845a94233openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "1d24213f609dc357307ba37839c07ac1openplskthxbye",
          operator: "Fertagus",
          type: "Fogueteiro -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Pragal -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
          operator: "Fertagus",
          type: "Setúbal -> Pragal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "bede5c4f1bbcc2bfe107f4e845a94233openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "1d24213f609dc357307ba37839c07ac1openplskthxbye",
          operator: "Fertagus",
          type: "Fogueteiro -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Pragal -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
          operator: "Fertagus",
          type: "Setúbal -> Pragal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "bede5c4f1bbcc2bfe107f4e845a94233openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "1d24213f609dc357307ba37839c07ac1openplskthxbye",
          operator: "Fertagus",
          type: "Fogueteiro -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Pragal -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
          operator: "Fertagus",
          type: "Setúbal -> Pragal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "bede5c4f1bbcc2bfe107f4e845a94233openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "1d24213f609dc357307ba37839c07ac1openplskthxbye",
          operator: "Fertagus",
          type: "Fogueteiro -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Pragal -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
          operator: "Fertagus",
          type: "Setúbal -> Pragal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "bede5c4f1bbcc2bfe107f4e845a94233openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
        {
          id: "1d24213f609dc357307ba37839c07ac1openplskthxbye",
          operator: "Fertagus",
          type: "Fogueteiro -> Setúbal",
          validity: new Date(2021, 12, 31, 0, 0, 0, 0)
        },
      ],
      transitPass: {
        id: "4e5933c725da433a1e327decf64c540eopenplskthxbye",
        type: "Navegante Metropolitano",
        profile: "Sub23",
        validity: new Date(2021, 12, 31, 0, 0, 0, 0)
      },
      zapping: {
        id: "ab1ec76fcd8f5f184c43e3a26e81c62fopenplskthxbye",
        balance: 5.00
      },
    },
    "julie@email.com": {
      user: {
        photo: "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",
        email: "julie@email.com",
        password: "password",
        foreName: "Julie",
        surName: "Mayer",
        birthdate: "01/02/2000",
        ncc: "53223459 0ZY9",
        nif: "258392701",
        nclient: "7293427214234",
        status: {
          profile: "Sub23",
          status: "Válido",
          validity: new Date(2022, 8, 30, 0, 0, 0, 0)
        },
        activePayment: 0,
        payment: [
          {
            type: "Mastercard",
            number: "5476726787568231",
            cvv: "157",
            validity: new Date(2024, 4, 1, 0, 0, 0, 0)
          },
          {
            type: "Visa",
            number: "4958361590785467",
            cvv: "439",
            validity: new Date(2024, 1, 1, 0, 0, 0, 0)
          },
          {
            type: "MBWay",
            number: "969152623"
          }
        ]
      },
      history: [
        {
          operator: "Fertagus",
          type: "Coina -> Sete-rios",
          date: new Date(2021, 10, 13, 17, 53, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Coina",
          date: new Date(2021, 10, 13, 11, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 1",
          date: new Date(2021, 6, 6, 10, 34, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Setúbal -> Sete-Rios",
          date: new Date(2021, 0, 1, 17, 28, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Setúbal",
          date: new Date(2020, 11, 31, 20, 49, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Coina",
          date: new Date(2020, 10, 13, 11, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2020, 6, 6, 10, 34, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Setúbal -> Sete-Rios",
          date: new Date(2020, 0, 1, 17, 28, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Setúbal",
          date: new Date(2019, 11, 31, 20, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2019, 10, 15, 12, 37, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Pragal",
          date: new Date(2019, 10, 13, 11, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 3",
          date: new Date(2019, 6, 6, 10, 34, 0, 0)
        },
      ],
      tickets: [
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Campolide -> Corroios",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "TTSL",
          type: "Cacilhas -> Cais do Sodré",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Campolide -> Corroios",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Corroios -> Campolide",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "TTSL",
          type: "Seixal -> Cais do Sodré",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        }
      ],
      transitPass: {
        id: "4e5933c725da433a1e54uwu54decf64c540eopenplskthxbye",
        type: "Navegante Metropolitano",
        profile: "Sub23",
        validity: new Date(2021, 10, 30, 0, 0, 0, 0)
      },
      zapping: {
        id: "ab1ec76fcd8f5f184c43e3a26e81c62fopenplskthxbye",
        balance: 8.00
      },
    },
    "bree@email.com": {
      user: {
        photo: "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",
        email: "bree@email.com",
        password: "password",
        foreName: "Bree",
        surName: "Van de Kamp",
        birthdate: "14/03/1969",
        ncc: "57483647 0ZY8",
        nif: "195729425",
        nclient: "24094098723509",
        status: {
          profile: "Normal",
          status: "Válido",
          validity: new Date(2021, 3, 26, 0, 0, 0, 0)
        },
        activePayment: 0,
        payment: [
          {
            type: "Mastercard",
            number: "5767826747365281",
            cvv: "895",
            validity: new Date(2021, 8, 30, 0, 0, 0, 0)
          },
          {
            type: "Visa",
            number: "4354165097579886",
            cvv: "235",
            validity: new Date(2021, 8, 30, 0, 0, 0, 0)
          },
          {
            type: "MBWay",
            number: "913934252"
          }
        ]
      },
      history: [
        {
          operator: "Fertagus",
          type: "Coina -> Sete-rios",
          date: new Date(2021, 10, 13, 17, 53, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Coina",
          date: new Date(2021, 10, 13, 11, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 1",
          date: new Date(2021, 6, 6, 10, 34, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Setúbal -> Sete-Rios",
          date: new Date(2021, 0, 1, 17, 28, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Setúbal",
          date: new Date(2020, 11, 31, 20, 49, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Coina",
          date: new Date(2020, 10, 13, 11, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2020, 6, 6, 10, 34, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Setúbal -> Sete-Rios",
          date: new Date(2020, 0, 1, 17, 28, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Setúbal",
          date: new Date(2019, 11, 31, 20, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2019, 10, 15, 12, 37, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Pragal",
          date: new Date(2019, 10, 13, 11, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 3",
          date: new Date(2019, 6, 6, 10, 34, 0, 0)
        },
      ],
      tickets: [
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Campolide -> Corroios",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "TTSL",
          type: "Cacilhas -> Cais do Sodré",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Campolide -> Corroios",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Corroios -> Campolide",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "TTSL",
          type: "Seixal -> Cais do Sodré",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        }
      ],
      transitPass: {
        id: "4e5933c725da433a1e327decf64c540eopenplskthxbye",
        type: "Navegante Metropolitano",
        profile: "Normal",
        validity: new Date(2022, 0, 1, 0, 0, 0, 0)
      },
      zapping: {
        id: "ab1ec76fcd8f5f184c43e3a26e81c62fopenplskthxbye",
        balance: 3.00
      },
    },
    "susan@email.com": {
      user: {
        photo: "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",
        email: "susan@email.com",
        password: "password",
        foreName: "Susan",
        surName: "Mayer",
        birthdate: "04/08/1965",
        ncc: "84638664 0ZX3",
        nif: "197234895",
        nclient: "24309235489255",
        status: {
          profile: "Normal",
          status: "Válido",
          validity: new Date(2024, 2, 11, 0, 0, 0, 0)
        },
        activePayment: 0,
        payment: [
          {
            type: "Mastercard",
            number: "5165827763672847",
            cvv: "853",
            validity: new Date(2024, 6, 3, 0, 0, 0, 0)
          },
          {
            type: "Visa",
            number: "4380557689796451",
            cvv: "347",
            validity: new Date(2024, 6, 27, 0, 0, 0, 0)
          },
          {
            type: "MBWay",
            number: "927759234"
          }
        ]
      },
      history: [
        {
          operator: "MTS",
          type: "Linha 1",
          date: new Date(2020, 10, 27, 10, 34, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Setúbal -> Sete-Rios",
          date: new Date(2021, 10, 3, 17, 28, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Setúbal -> Fogueteiro",
          date: new Date(2021, 9, 28, 6, 18, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Fogueteiro -> Setúbal",
          date: new Date(2021, 9, 27, 17, 30, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 1",
          date: new Date(2021, 6, 6, 10, 34, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Setúbal -> Sete-Rios",
          date: new Date(2021, 0, 1, 17, 28, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Setúbal",
          date: new Date(2020, 11, 31, 20, 49, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Coina",
          date: new Date(2020, 10, 13, 11, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2020, 6, 6, 10, 34, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Setúbal -> Sete-Rios",
          date: new Date(2020, 0, 1, 17, 28, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Setúbal",
          date: new Date(2019, 11, 31, 20, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2019, 10, 15, 12, 37, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Pragal",
          date: new Date(2019, 10, 13, 11, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 3",
          date: new Date(2019, 6, 6, 10, 34, 0, 0)
        },
      ],
      tickets: [
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Campolide -> Corroios",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "TTSL",
          type: "Cacilhas -> Cais do Sodré",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Campolide -> Corroios",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Corroios -> Campolide",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "TTSL",
          type: "Seixal -> Cais do Sodré",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        }
      ],
      transitPass: {
        id: "4e5933c725da433a1e327decf64c540eopenplskthxbye",
        type: "Navegante Metropolitano",
        profile: "Normal",
        validity: new Date(2022, 0, 1, 0, 0, 0, 0)
      },
      zapping: {
        id: "ab1ec76fcd8f5f184c43e3a26e81c62fopenplskthxbye",
        balance: 5.00
      },
    },
    "danielle@email.com": {
      user: {
        photo: "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",
        email: "danielle@email.com",
        password: "password",
        foreName: "Danielle",
        surName: "Van de Kamp",
        birthdate: "16/11/2003",
        ncc: "23532973 0YX9",
        nif: "271947239",
        nclient: "96584762952654",
        status: {
          profile: "4_18",
          status: "Inválido",
          validity: new Date(2021, 10, 16, 0, 0, 0, 0)
        },
        activePayment: 0,
        payment: [
          {
            type: "Mastercard",
            number: "5028178592721335",
            cvv: "243",
            validity: new Date(2024, 5, 27, 0, 0, 0, 0)
          }
        ]
      },
      history: [
        {
          operator: "Fertagus",
          type: "Coina -> Sete-rios",
          date: new Date(2021, 10, 13, 17, 53, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Coina",
          date: new Date(2021, 10, 13, 11, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 1",
          date: new Date(2021, 6, 6, 10, 34, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Setúbal -> Sete-Rios",
          date: new Date(2021, 0, 1, 17, 28, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Setúbal",
          date: new Date(2020, 11, 31, 20, 49, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Coina",
          date: new Date(2020, 10, 13, 11, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2020, 6, 6, 10, 34, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Setúbal -> Sete-Rios",
          date: new Date(2020, 0, 1, 17, 28, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Setúbal",
          date: new Date(2019, 11, 31, 20, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 2",
          date: new Date(2019, 10, 15, 12, 37, 0, 0)
        },
        {
          operator: "Fertagus",
          type: "Sete-Rios -> Pragal",
          date: new Date(2019, 10, 13, 11, 49, 0, 0)
        },
        {
          operator: "MTS",
          type: "Linha 3",
          date: new Date(2019, 6, 6, 10, 34, 0, 0)
        },
      ],
      tickets: [
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Campolide -> Corroios",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "TTSL",
          type: "Cacilhas -> Cais do Sodré",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Campolide -> Corroios",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "Fertagus",
          type: "Corroios -> Campolide",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "MTS",
          type: "Bilhete Simples",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        },
        {
          id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
          operator: "TTSL",
          type: "Seixal -> Cais do Sodré",
          validity: new Date(2022, 11, 31, 0, 0, 0, 0)
        }
      ],
      transitPass: {
        id: "4e5933c725da433a1e327decf64c540eopenplskthxbye",
        type: "Navegante Metropolitano",
        profile: "4_18",
        validity: new Date(2022, 0, 1, 0, 0, 0, 0)
      },
      zapping: {
        id: "ab1ec76fcd8f5f184c43e3a26e81c62fopenplskthxbye",
        balance: 9.00
      },
    }
  }
};

export const reducer = (state = initialListState, action) => {
  switch (action.type) {
    case actionTypes.SetLoggedIn: {
      return { ...state, activeUser: state.users[action.payload] }
    }
    case actionTypes.LogOut: {
      return {
        ...state,
        activeUser: null,
        users: {
          ...state.users,
          [state.activeUser.user.email]: state.activeUser
        }
      }
    }
    case actionTypes.UpdateUserInfo: {
      return {
        ...state, activeUser: {
          ...state.activeUser,
          user: {
            ...state.activeUser.user,
            nif: action.payload.nif,
            email: action.payload.email,
            password: action.payload.password
          }
        }
      }
    }
    case actionTypes.AddCard: {
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          user: {
            ...state.activeUser.user,
            payment: [
              ...state.activeUser.user.payment,
              action.payload
            ]
          }
        }
      }
    }
    case actionTypes.AddMBWay: {
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          user: {
            ...state.activeUser.user,
            payment: [
              ...state.activeUser.user.payment,
              action.payload
            ]
          }
        }
      }
    }
    case actionTypes.SetActivePayment: {
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          user: {
            ...state.activeUser.user,
            activePayment: action.payload
          }
        }
      }
    }
    case actionTypes.AddTicket: {
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          tickets: [
            {
              ...action.payload
            },
            ...state.activeUser.tickets
          ]
        }
      }
    }
    case actionTypes.RenewPass: {
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          transitPass: {
            ...state.activeUser.transitPass,
            validity: new Date(new Date(state.activeUser.transitPass.validity).setMonth(new Date(state.activeUser.transitPass.validity).getMonth() + 1)).toJSON()
          }
        }
      }
    }
    case actionTypes.AddZapping: {
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          zapping: {
            ...state.activeUser.zapping,
            balance: state.activeUser.zapping.balance + action.payload
          }
        }
      }
    }
    default:
      return state;
  }
};

export const actions = {
  setLoggedIn: (userEmail) => ({
    type: actionTypes.SetLoggedIn,
    payload: userEmail
  }),
  updateUserInfo: (nif, email, password) => ({
    type: actionTypes.UpdateUserInfo,
    payload: { nif, email, password }
  }),
  addCard: (type, number, cvv, validity, country) => ({
    type: actionTypes.AddCard,
    payload: { type, number, cvv, validity, country }
  }),
  addMBWay: (number) => ({
    type: actionTypes.AddMBWay,
    payload: { type: "MBWay", number }
  }),
  setActivePayment: (index) => ({
    type: actionTypes.SetActivePayment,
    payload: index
  }),
  addTicket: (operator, type) => ({
    type: actionTypes.AddTicket,
    payload: {
      operator,
      type,
      validity: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      id: [...Array(32)].map(() => Math.floor(Math.random() * 16).toString(16)).join('') + "openplskthxbye"
    }
  }),
  renewPass: () => ({ type: actionTypes.RenewPass }),
  addZapping: (price) => ({ type: actionTypes.AddZapping, payload: price }),
  logOut: () => ({ type: actionTypes.LogOut })
};