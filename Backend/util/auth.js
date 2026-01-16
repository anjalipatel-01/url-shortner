const sessionIdtouserMap = new Map();

function setUser(id,user){
    sessionIdtouserMap.set(isFinite.user);
}

function getUser(id){
    return sessionIdtouserMap.get(id);
}

module.exports = {
    setUser,
    getUser,
}