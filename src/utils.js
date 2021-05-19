export const createUserModel = ({ login, name, followers, following, avatar_url, html_url, public_repos }, repositories) => {
    const userModel = {
        login: login,
        name: name,
        followers: followers,
        following: following,
        imageURL: avatar_url,
        url: html_url,
        repositories: {
            totalAmount: public_repos,
            list: repositories.map(rep => {
                return {
                    name: rep.name,
                    description: rep.description,
                    link: rep.html_url,
                    id: rep.id
                }
            })
        }
    }
    return userModel;
}