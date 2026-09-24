import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OrganizationChartModule, OrganizationChartNode } from 'primeng/organizationchart';
import { SharedModule, TreeNode } from 'primeng/api';
// import { Product } from '@/domain/product';

@Component({
  selector: 'app-teams',
  imports: [OrganizationChartModule,SharedModule],
  templateUrl: './teams.html',
  standalone: true,
  styleUrl: './teams.css',
})
export class Teams {
  data:TreeNode[] = [
        {
            key: '0',
            expanded: true,
            label: 'Kepala Cabang\r\nfarras',
            checked:true,
            data: {
              label : 'Kepala Cabang'
            },
            children: [
                // {
                //     key: '0-0',
                //     label: 'Product Lead',
                //     expanded: true,
                //     children: [
                //         {
                //             key: '0-0-0',
                //             label: 'UX/UI Designer'
                //         },
                //         {
                //             key: '0-0-1',
                //             label: 'Product Manager'
                //         }
                //     ]
                // },
                // {
                //     key: '0-1',
                //     label: 'Engineering Lead',
                //     expanded: true,
                //     children: [
                //         {
                //             key: '0-1-0',
                //             label: 'Frontend Developer'
                //         },
                //         {
                //             key: '0-1-1',
                //             label: 'Backend Developer'
                //         }
                //     ]
                // }
            ]
        }
    ];
}
