var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Exo 1
export const addTwoNumbers1 = (a, b) => a + b;
export const addTwoNumbers2 = (params) => params.first + params.second;
export const getName1 = (params) => {
    if (params.last) {
        return `${params.first} ${params.last}`;
    }
    return params.first;
};
// export const getName2 = (first: Person['first'], last: Person['last']): string => {
// On peut destructurer les objets passés en paramètre
export const getName2 = ({ first, last }) => {
    if (last) {
        return `${first} ${last}`;
    }
    return first;
};
// getName2('Toto', 'Titi');
getName2({ first: 'Toto', last: 'Titi' });
const defaultUser = {
    id: 1,
    firstName: 'Fiorella',
    lastName: 'Mota',
    isAdmin: false,
};
const getUserId = (user) => {
    return user.id;
};
console.log(getUserId(defaultUser));
// Exo 5
// Une version sans enum
// type Role = 'admin' | 'user' | 'super-admin';
// Une version avec enum
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
    Role["SuperAdmin"] = "super-admin";
})(Role || (Role = {}));
export const defaultUser2 = {
    id: 1,
    firstName: 'Fiorella',
    lastName: 'Mota',
    // role: 'admin',
    role: Role.Admin,
};
export const defaultUser3 = {
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
const makeUser = () => {
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
export const fetchLukeSkywalker = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://swapi.dev/api/people/1').then((res) => {
        return res.json();
    });
    return data;
});
const r = fetchLukeSkywalker().then(response => response.height);
