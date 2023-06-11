import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline'

const authedRoute = '/authed';

const appPagesNavigation = [
    { name: 'Overview',  href: `${authedRoute}/dashboard`, icon: HomeIcon , current: true  },
    { name: 'income & Prediction', href: `${authedRoute}/finance`,  icon: UsersIcon, current: false },
    { name: 'tracking expenses', href: `${authedRoute}/expenses`,  icon: UsersIcon, current: false },
    { name: 'smart analysis',  href: `${authedRoute}/smart-analysis`,     icon: UsersIcon, current: false },
    { name: 'finance education',  href: `${authedRoute}/smart-analysis`,  icon: UsersIcon, current: false }
];

const tablePresentations = {
    incme: {

    },
    expenses: {

    },
    categories: {
        
    }
}

const colorScheme = {
    light: {
        css: `bg-white text-black`
    },
    dark: {
        css: `bg-black text-white`
    }
}

export {
    appPagesNavigation
}
