import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faCircleUser,
  faUsers,
  faBoxesStacked,
  faListUl,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';

//Admin layout nav items
export const adminNavItems = [
    {
      id: 1,
      title: 'Trang chủ',
      icon: <FontAwesomeIcon icon={faHouse} style={{ color: '#fff' }} />,
      path: '/admin/home',
    },
    {
      id: 2,
      title: 'Quản lý tài khoản',
      icon: <FontAwesomeIcon icon={faUsers} style={{ color: '#fff' }} />,
      spacing: true,
      submenu: true,
      sublinks: [
        {
          id: 1,
          title: 'Hội đồng',
          path: '/admin/account-judge',
        },
        {
          id: 2,
          title: 'Nhóm nghiên cứu',
          path: '/admin/account-group',
        },
      ],
    },
    {
      id: 3,
      title: 'Quản lý đề tài',
      icon: <FontAwesomeIcon icon={faBoxesStacked} style={{ color: '#fff' }} />,
      submenu: true,
      sublinks: [
        {
          id: 1,
          title: 'Năm 2024',
          path: '/admin/project-2024',
        },
        {
          id: 2,
          title: 'Năm 2023',
          path: '/admin/project-2023',
        },
      ],
    },
    {
      id: 4,
      title: 'Quản lý lĩnh vực',
      icon: <FontAwesomeIcon icon={faListUl} style={{ color: '#fff' }} />,
      submenu: true,
      sublinks: [
        {
          id: 1,
          title: 'Lĩnh vực dự thi',
          path: '/admin/fieldofcompetition',
        },
      ],
    },
    {
      id: 5,
      title: 'Quản lý trường học',
      icon: <FontAwesomeIcon icon={faSchool} style={{ color: '#fff' }} />,
      submenu: true,
      sublinks: [
        {
          id: 1,
          title: 'Trường đại học/Cao đẳng',
          path: '/admin/school',
        },
      ],
    },
    {
      id: 6,
      title: 'Profile',
      icon: <FontAwesomeIcon icon={faCircleUser} style={{ color: '#fff' }} />,
      spacing: true,
      path: '/admin/profile',
    },
  ];