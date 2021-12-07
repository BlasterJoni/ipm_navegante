export const actionTypes = {
  Example: "[Example] Action",
  Increment: "[Increment] Action"
};

const initialListState = {
  example: undefined,
  count: 0,
  alerts: [
    {
      title: "Bloqueio nas linhas",
      text: "Estacionamento indevido poderá causa atrasos na linha 1.",
      date: new Date(2021, 10, 30, 13, 30, 0, 0), 
      operator: "MTS"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos barcos.",
      date: new Date(2021, 10, 30, 7, 52, 0, 0), 
      operator: "TTSL"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos comboios.",
      date: new Date(2021, 10, 27, 8, 33, 0, 0), 
      operator: "Fertagus"
    },
    {
      title: "Bloqueio nas linhas",
      text: "Estacionamento indevido poderá causa atrasos na linha 1.",
      date: new Date(2021, 10, 30, 13, 30, 0, 0), 
      operator: "MTS"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos barcos.",
      date: new Date(2021, 10, 30, 7, 52, 0, 0), 
      operator: "TTSL"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos comboios.",
      date: new Date(2021, 10, 27, 8, 33, 0, 0), 
      operator: "Fertagus"
    },
    {
      title: "Bloqueio nas linhas",
      text: "Estacionamento indevido poderá causa atrasos na linha 1.",
      date: new Date(2021, 10, 30, 13, 30, 0, 0), 
      operator: "MTS"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos barcos.",
      date: new Date(2021, 10, 30, 7, 52, 0, 0), 
      operator: "TTSL"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos comboios.",
      date: new Date(2021, 10, 27, 8, 33, 0, 0), 
      operator: "Fertagus"
    },
    {
      title: "Bloqueio nas linhas",
      text: "Estacionamento indevido poderá causa atrasos na linha 1.",
      date: new Date(2021, 10, 30, 13, 30, 0, 0), 
      operator: "MTS"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos barcos.",
      date: new Date(2021, 10, 30, 7, 52, 0, 0), 
      operator: "TTSL"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos comboios.",
      date: new Date(2021, 10, 27, 8, 33, 0, 0), 
      operator: "Fertagus"
    },
    {
      title: "Bloqueio nas linhas",
      text: "Estacionamento indevido poderá causa atrasos na linha 1.",
      date: new Date(2021, 10, 30, 13, 30, 0, 0), 
      operator: "MTS"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos barcos.",
      date: new Date(2021, 10, 30, 7, 52, 0, 0), 
      operator: "TTSL"
    },
    {
      title: "Greve",
      text: "Greve poderá criar atrasos nos comboios.",
      date: new Date(2021, 10, 27, 8, 33, 0, 0), 
      operator: "Fertagus"
    },
  ],
  user: {
    photo: "/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBKRXhpZgAASUkqAAgAAAACAA4BAgAcAAAAJgAAABIBAwABAAAAAQAAAAAAAABEZWZhdWx0IEdyYXkgUGxhY2Vob2xkZXIgTWFu/+EFPWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG8iIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSI4NzE3NTI0NjIiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9sZWdhbC9saWNlbnNlLWFncmVlbWVudD91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29v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gAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAK+qarpeh2D6prepQWdtH9+e5lCIPbJ7+3WgDzvxN+1L4F0png8OadeavIvAkA8iE/8CcFj/wB8fjQBxmq/tVfEC7JXSdH0qyTsTE8zj8WYL/47QBjz/tD/ABinbK+LliHpFptuP5xk0ARp+0D8Y0Of+E1Y+zadbH/2lQBfsv2mvixaEG4vdPugO1xpyjP/AH7K0AdP4f8A2tULLF4t8GkD+KfS7jP/AJDk/wDi6APRfCPxT8AeOGWDw94khe4b/lyuP3U2fQI2N3/AcigDoCCDgigAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDg/i18dNH+HW/RdJijv9ZK/6gt+6tsjgykc57hBz6kcZAPAfFPi7xL411L+1fFOry3cwz5Yc4SIeiIOEH0H1zQBm0AFABQAUAFABQAhVW+8M46UAdv4J+PvxC8GbLWbUP7VslwPsmosWZR6JJ95fYHKj0oA9l8A/HPwJ49aOxivDp2oPgCwvmCl29I3+6/sOG/2aAOxIIOCMH0NABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUA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GgDp6AI57W2uWia5t0kMMnmQl1zsfay7h6HazD6MaAJKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDnPGsu6+ghz92Et+ZP+FAGNQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAqO8biSNsMpBU+hFAHb2twt3bR3SDAkQNj0yKAJKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA5XxZJv1t1/uRov6Z/rQBm0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHU+ErjztHEZPMMjJ+HUfzoA06ACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA43XJBLrFy4/57Ffy4/pQBVoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKANzwTPiW4tSeqq4H0OD/MUAdBQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAR3V1DZW73c7YRBk+/t9TQBxDO0jmR/vMSW+poASgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAt6Jfrpupx3Mh+TlZMf3T/hwfwoA39V8R2VikYt50lZ3XdsYEKmeSce3SgDSPBxQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAEOpXP2PT57oHBSIlfr2/XFAHH3d/e37Br26eQjoGPA+gHAoAhoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOy0S6+2aTBOTk+WFf6jg/wAqALVABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQBk+MLnytLW3B5mlAP0HJ/XFAHM0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQBv+C7vKTWDHoRIn8j/T86AN2gAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA5nxhdedqa2wPEMYB/3jyf0xQBk0AFABQAUAFABQAUAFABQAUAFABQA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",
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
      validity:  new Date(2021, 9, 31, 0, 0, 0, 0)
    },
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
      type: "Pragal->Setúbal",
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
      type: "Pragal->Setúbal",
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
      type: "Pragal->Setúbal",
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
      type: "Pragal->Setúbal",
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
      type: "Pragal->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
      operator: "Fertagus",
      type: "Setúbal->Pragal",
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
      type: "Fogueteiro->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
      operator: "Fertagus",
      type: "Pragal->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
      operator: "Fertagus",
      type: "Setúbal->Pragal",
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
      type: "Fogueteiro->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
      operator: "Fertagus",
      type: "Pragal->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
      operator: "Fertagus",
      type: "Setúbal->Pragal",
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
      type: "Fogueteiro->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
      operator: "Fertagus",
      type: "Pragal->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
      operator: "Fertagus",
      type: "Setúbal->Pragal",
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
      type: "Fogueteiro->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
      operator: "Fertagus",
      type: "Pragal->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
      operator: "Fertagus",
      type: "Setúbal->Pragal",
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
      type: "Fogueteiro->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
      operator: "Fertagus",
      type: "Pragal->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
      operator: "Fertagus",
      type: "Setúbal->Pragal",
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
      type: "Fogueteiro->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "96158466b39fe7a75cf065cf64762324openplskthxbye",
      operator: "Fertagus",
      type: "Pragal->Setúbal",
      validity: new Date(2021, 12, 31, 0, 0, 0, 0)
    },
    {
      id: "5621ece98f2bdc9e962021c53d99be71openplskthxbye",
      operator: "Fertagus",
      type: "Setúbal->Pragal",
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
      type: "Fogueteiro->Setúbal",
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
  "jmods@email.com":{

  }
};

export const reducer = (state = initialListState, action) => {
  switch (action.type) {
    case actionTypes.Example: {
      const { example } = action.payload;

      return { ...state, example }
    }
    case actionTypes.Increment: {
      return { ...state, count: state.count + 1 }
    }
    default:
      return state;
  }
};

export const actions = {
  example: (example) => ({
    type: actionTypes.Example,
    payload: { example },
  }),
  increment: () => ({ type: actionTypes.Increment })
};