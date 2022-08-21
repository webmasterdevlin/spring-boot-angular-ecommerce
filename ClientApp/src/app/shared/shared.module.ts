import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./layout/footer/footer.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { MaterialModule } from "../material/material.module";
import { BannerComponent } from "./layout/banner/banner.component";

@NgModule({
  declarations: [NavbarComponent, FooterComponent, BannerComponent],
  imports: [MaterialModule, CommonModule],
  exports: [NavbarComponent, FooterComponent, BannerComponent],
})
export class SharedModule {}
