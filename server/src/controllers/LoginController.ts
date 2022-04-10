import { Request, Response, NextFunction } from "express";
import { get, controller, bodyValidator, post } from './decorators';

// function logger(req: Request, res: Response, next: NextFunction) {
//     console.log("Request was made!!!!");
//     next();
// }

@controller("/auth")
class LoginController {
    @get("/login")
    getLogin(req: Request, res: Response): void {
        res.send(`
            <form method="post">
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                <button>Submit</button>
            </form>
        `)
    };

    @post("/login")
    @bodyValidator("email", "password")
    postLogin(req: Request, res: Response) {
        const { email, password } = req.body;
        
        if (email === "hi@hi.com" && password === "password") {
            req.session = { loggedIn: true };
            res.redirect("/");
        } else {
            res.send("You must provide an email property");
        }
    }

    @get("/logout")
    getLogout(req: Request, res: Response) {
        req.session = undefined;
        res.redirect("/");
    }

}