import {
  Component,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  AfterViewInit,
  EventEmitter,
  Output,

} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavServicesService } from 'src/app/services/general/nav-services.service';
import { NavItem } from '../../../models/general/navItem';
import { MenuDinamicoService } from '../../../services/general/menu-dinamico.service';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  user:any;
  @ViewChild('drawer') appDrawer: ElementRef;
  @Output() cierreSesion = new EventEmitter();
  navItems: NavItem[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  showSubmenu: boolean = false;
  showSubmenuEjemplos: boolean = false;
  panelOpenState = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private navService: NavServicesService,
    private _menuServices: MenuDinamicoService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public router:Router
  ) {
 this.user =JSON.parse(localStorage.getItem('user'));
    this.matIconRegistry.addSvgIcon(
      'user',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/user.svg'),
    );
    this._menuServices.obtenerMenuItems().subscribe((items) => {

      this.navItems = items;
      localStorage.setItem('vistas', JSON.stringify(this.navItems))
    });
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  cerrarSession(){
    localStorage.setItem('IsIdentity', 'false');
    this.cierreSesion.emit(false);
    localStorage.clear()

    this.router.navigate(['/login']);
  }
}
