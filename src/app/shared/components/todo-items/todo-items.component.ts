// Angular lifecycle aur component decorator import
import { Component, OnDestroy, OnInit } from '@angular/core';

// Apna data service jisme user-related logic hai
import { DataService } from '../../services/data.service';

// User model ya interface import (name, id ka structure)
import { user } from '../../module/data';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-todo-items',                        // Component ka selector (HTML me <app-todo-items>)
  templateUrl: './todo-items.component.html',        // Is component ka HTML template
  styleUrls: ['./todo-items.component.scss']         // CSS styling
})
export class TodoItemsComponent implements OnInit, OnDestroy {

  // Sabhi users ka array store hoga isme (jo loop me display hote hain)
  userData: Array<user> = [];

  // Constructor me DataService inject ki gayi hai
  constructor(private data: DataService,
    private dialog: MatDialog
  ) {}

  // ✅ Component load hone par user list ko fetch karo
  ngOnInit(): void {
    this.userData = this.data.getUsersData();        // DataService se user data lekar userData me store kiya
  }

  // ✅ Edit button par click hone par chalne wala method
  edit(id: string) {
    // ID ke basis par matching user object find karo
    const user = this.data.usersObjArr.find(add => add.id === id);

    if (user) {
      // Agar user mil gaya to use selected user bana do (edit form me bhejne ke liye)
      this.data.selectUser(user); // Observable me data emit karega
    }
  }

// ✅ Delete button par click hone par chalne wala method
onDelete(id: string) {
  
  // ✅ Dialog configuration object banaya gaya
  const dialogconfig = new MatDialogConfig();

  // ✅ Dialog ke andar kya message dikhana hai (data pass kar rahe hain)
  dialogconfig.data = `Are You Sure?`; // Ye message confirm dialog component me show hoga

  // ✅ User ESC ya backdrop click se dialog band na kar sake (force decision)
  dialogconfig.disableClose = true;

  // ✅ Dialog open kar rahe hain — ConfirmDialogComponent show hoga
  const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogconfig);

  // ✅ Jab dialog band ho jaye (user ne haan/na ka button press kiya ho), uske baad ye chalega
  dialogRef.afterClosed().subscribe((result: boolean) => {

    if (result === true) { // ✅ Agar user ne "Yes" choose kiya (confirm delete)

      this.data.onRemove(id);  // ✅ DataService ka method call karke user delete karo

      // ✳️ Yahan aap optionally clearSelectedUser bhi call kar sakte ho
      // this.data.clearSelectedUser(); — taake edit mode me wo user ho to hata diya jaye

    }

    // Agar result false hai, to kuch nahi hoga (user ne cancel kar diya)
  });

}

  // ✅ Jab component destroy ho (navigate karein dusre route par), to clean-up karo
  ngOnDestroy(): void {
     this.data.clearSelectedUser();
  }
}
