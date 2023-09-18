export enum NavbarRoutes {
    HOME = 'home',
    PROJECTS ='projects',
    ABOUT = 'about_me',
    BLOG = 'blog',
    CONTACT='contact'
}

export type Routes ={
    [x in NavbarRoutes]:string
}

export const routes: Routes ={
    [NavbarRoutes.HOME]:'/',
    [NavbarRoutes.PROJECTS]:'/projects',
    [NavbarRoutes.ABOUT]:'/about-me',
    [NavbarRoutes.BLOG]:'/blog',
    [NavbarRoutes.CONTACT]:'/contact-me'
} as const

export const routesArray = Object.entries(routes).map(([key, value]) => ({ routeName: key, routePath: value }));

export const RoutesLabel: Routes ={
    [NavbarRoutes.HOME]:'Home',
    [NavbarRoutes.PROJECTS]:'Projects',
    [NavbarRoutes.ABOUT]:'About me',
    [NavbarRoutes.CONTACT]:'Contact me',
    [NavbarRoutes.BLOG]:'Blog',

}