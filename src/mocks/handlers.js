import { rest } from "msw"

const baseURL = "https://drf-api-reco-69ef489e362a.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res, ctx) => {
        return res(
            ctx.json({
            "pk": 13,
            "username": "mite",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 13,
            "profile_image": "/default_profile_hhelfd.jpg",
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];