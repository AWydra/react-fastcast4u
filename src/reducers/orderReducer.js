const initialState = {
  currency: '$',
  cycle: 'monthly',
  plan: 'regular',
  activeProduct: {
    id: '2022',
    plan: {
      regular: '515',
      premium: '516',
    },
    name: 'Everest Cast',
    description:
      'New, evolving Radio Control Panel with a fresh user interface, advanced graphic AutoDJ playlist scheduler, drag & drop music manager and basic listener statistics. You can switch between SHOUTcast and IceCast Radio Servers',
    monthly: {
      regular: '9.00',
      premium: '19.00',
    },
    annually: {
      regular: '108.00',
      premium: '228.00',
    },
    biennially: {
      regular: '216.00',
      premium: '456.00',
    },
  },
  activeAddons: [],
  products: [
    {
      id: '2022',
      plan: {
        regular: '515',
        premium: '516',
      },
      name: 'Everest Cast',
      description:
        'New, evolving Radio Control Panel with a fresh user interface, advanced graphic AutoDJ playlist scheduler, drag & drop music manager and basic listener statistics. You can switch between SHOUTcast and IceCast Radio Servers',
      monthly: {
        regular: '9.00',
        premium: '19.00',
      },
      annually: {
        regular: '108.00',
        premium: '228.00',
      },
      biennially: {
        regular: '216.00',
        premium: '456.00',
      },
    },
    {
      id: '2040',
      plan: {
        regular: '521',
        premium: '522',
      },
      name: 'Centova Cast',
      description:
        'Radio Server Control Panel trusted by thousands of Online Stations worldwide with a basic AutoDJ playlist management and advanced listener reports. By default set up with SHOUTcast Server',
      monthly: {
        regular: '18.00',
        premium: '36.00',
      },
      annually: {
        regular: '216.00',
        premium: '446.00',
      },
      biennially: {
        regular: '432.00',
        premium: '912.00',
      },
    },
  ],
  addons: [
    {
      id: '2052',
      name: 'Mobile App Android & Apple iOS',
      description:
        'Your own Mobile App with custom branding, Radio Player, Social Media, WebView and more...',
      relid: '40',
      monthly: '10.00',
      annually: '120.00',
      biennially: '240.00',
      children: [
        {
          id: '2064',
          name: 'AdMob monetization',
          description: 'Monetize your stream by displaying AdMob Ads in your Mobile App',
          relid: '41',
          monthly: '0.00',
          annually: '0.00',
          biennially: '0.00',
        },
        {
          id: '2070',
          name: 'Push notifications',
          description:
            'Improve interaction with your listeners by sending notifications through the App',
          relid: '42',
          monthly: '0.00',
          annually: '0.00',
          biennially: '0.00',
        },
      ],
    },
    {
      id: '2079',
      name: 'Directory Submission',
      description: 'Add your Radio Station to over 15 popular Online Radio Directories',
      relid: '43',
      monthly: '5.00',
      annually: '60.00',
      biennially: '120.00',
    },
    {
      id: '2094',
      name: 'Alexa Radio Skill',
      description: 'Custom invocation that brings up your radio stream on Alexa Speakers',
      relid: '45',
      monthly: '5.00',
      annually: '60.00',
      biennially: '120.00',
    },
  ],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_PRODUCT':
      return {
        ...state,
        activeProduct: action.payload,
      };
    case 'TOGGLE_ADDON':
      const isInArray = [...state.activeAddons].find(el => el.id === action.payload.id);
      return {
        ...state,
        activeAddons: isInArray
          ? [...state.activeAddons].filter(el => el.id !== action.payload.id)
          : [...state.activeAddons, action.payload],
      };
    case 'SET_CYCLE':
      return {
        ...state,
        cycle: action.payload,
      };
    case 'SET_PLAN':
      return {
        ...state,
        plan: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
