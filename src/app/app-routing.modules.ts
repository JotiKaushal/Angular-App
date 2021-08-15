import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes =[
{path: "",  redirectTo: "/recipes", pathMatch: "full"},
{path:"recipes", loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipeModule)},
{path:"shopping-list", loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)},
{path:"auth", loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule)}
];

@NgModule(
    {
     imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
     exports: [RouterModule]
    }
)

export class AppRouteModule{

}