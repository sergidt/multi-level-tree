export interface TreeNode {
  id: string;
  name: string;
  description?: string;
  children?: TreeNode[];
  path: string;
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
