import login from '@/pages/login/login';
import race from '@/pages/race/race';
import raceDetail from '@/pages/race-detail/race-detail';
import betDetail from '@/pages/bet-detail/bet-detail';
import league from '@/pages/league/league';
import personal from '@/pages/personal/personal';
import resetPassword from '@/pages/reset-password/reset-password';
export default [{
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/league',
    name: 'league',
    alias: '/',
    component: league
  },
  {
    path: '/race/:leagueName/:leagueId',
    name: 'race',
    component: race
  },
  {
    path: '/race-detail/:leagueName/:id',
    name: 'raceDetail',
    component: raceDetail
  },
  {
    path: '/race/:id/bet-detail',
    name: 'betDetail',
    component: betDetail
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    component: resetPassword
  }
];