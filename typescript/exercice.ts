// Exo 1
export const addTwoNumbers1 = (a: number, b: number): number => a + b;

// Exo 2
type Numbers = {
  first: number;
  second: number;
}

export const addTwoNumbers2 = (params: Numbers): number => params.first + params.second;

// Exo 3
type Person = {
  first: string;
  last: string;
}

export const getName1 = (params: Person): string => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

// export const getName2 = (first: Person['first'], last: Person['last']): string => {
// On peut destructurer les objets passés en paramètre
export const getName2 = ({ first, last }: Person): string => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

// getName2('Toto', 'Titi');
getName2({ first: 'Toto' , last: 'Titi' });

// Exo 4
interface User1 {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

const defaultUser: User1 = {
  id: 1,
  firstName: 'Fiorella',
  lastName: 'Mota',
  isAdmin: false,
};

const getUserId = (user: User1): number => {
  return user.id;
};

console.log(getUserId(defaultUser));

// Exo 5
// Une version sans enum
// type Role = 'admin' | 'user' | 'super-admin';

// Une version avec enum
enum Role {
  Admin = 'admin',
  User = 'user',
  SuperAdmin = 'super-admin',
}

interface User2 {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
}

export const defaultUser2: User2 = {
  id: 1,
  firstName: 'Fiorella',
  lastName: 'Mota',
  // role: 'admin',
  role: Role.Admin,
};

// Exo 6
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role,
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

export const defaultUser3: User = {
  id: 1,
  firstName: 'Fiorella',
  lastName: 'Mota',
  role: Role.Admin,
  posts: [
    {
      id: 1,
      title: 'How I eat so much cheese',
    },
    {
      id: 2,
      title: 'Why I don\'t eat more vegetables',
    },
  ],
};

// Exo 7
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  posts: Post[];
}

interface Post {
  id: number;
  title: string;
}

const makeUser = (): User => {
  return {
    id: 1,
    firstName: 'Toto',
    lastName: 'Titi',
    role: Role.User,
    posts: [
      { id: 1, title: 'Cool' },
    ],
  };
};

// Exo 8
interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch('https://swapi.dev/api/people/1').then((res) => {
    return res.json();
  });

  return data;
};

const r = fetchLukeSkywalker().then(response => response.height)
