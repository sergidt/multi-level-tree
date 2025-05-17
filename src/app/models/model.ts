export interface TreeNode {
  id: string;
  name: string;
  description?: string;
  //isCategory: boolean;
  children?: TreeNode[];
  metadata?: {
    [key: string]: any;
  };
  icon?: string;
  expanded?: boolean;
}

export interface BreadcrumbItem {
  id: string;
  name: string;
}