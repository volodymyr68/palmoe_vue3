export const auth = (user) => {
    return user.isAuthenticated;
};
export const isAdmin = (user) => {
    return user.role === "admin";
};
