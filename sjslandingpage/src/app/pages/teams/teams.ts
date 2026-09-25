import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TreeNode } from '@openng/optimus-ui/api';
import { OrganizationChartModule } from '@openng/optimus-ui/organizationchart';

@Component({
  selector: 'app-teams',
  imports: [OrganizationChartModule],
  templateUrl: './teams.html',
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './teams.css',
})
export class Teams {
  selectedNodes!: TreeNode[];
  data: TreeNode[] = [
    {
      key: '0',
      expanded: true,
      // label: '1',
      data: {
        image: "anggota_lead.png",
        name: "Rimat Hendrawijaya, S.H., DAc.",
        title: 'Kepala Cabang',
      },
      children: [
        {
          key: '0-0',
          expanded: true,
          data: {
            image: "Anggota_IT_and_Keu.png",
            name: "Mohammad Hatta, S.E.",
            title: 'Kadiv Keuangan dan IT',
          },
          children: [
            {
              key: '0-0-0',
              data: {
                image: "anggota_head_it.png",
                name: "Muhammad Farras Ma'ruf, S.Ak.",
                title: 'IT Head',
              }
            }
          ]
        },
        {
          key: '0-1',
          expanded: true,
          data: {
            image: "Anggota Operation.png",
            name: "Sri Kusnani",
            title: 'Kadiv Operasional',
          },
          children: [
            // {
            //   key: '0-0-0',
            //   label: 'UX/UI Designer'
            // }
          ]
        },
        {
          key: '0-1',
          expanded: true,
          data: {
            image: "Anggota_Market.png",
            name: "Harry Yudha",
            title: 'Kadiv Marketing',
          },
          children: [
            // {
            //   key: '0-0-0',
            //   label: 'UX/UI Designer'
            // }
          ]
        }
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
      ],
    },
  ];
}
