import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 isMenuOpen : boolean = false;

 togglebtn(){
  this.isMenuOpen = !this.isMenuOpen;
 }

 @HostListener('document:click',['$event'])
 closeevent(event:Event){
const target = event.target as HTMLElement;
const isInsideNavbar = target.closest('.navbar-container');
console.log(isInsideNavbar);
if (!isInsideNavbar) {
  this.isMenuOpen = false;
}
 }
}
