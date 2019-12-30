import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// Just return the tree
export function ngUpdate(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}
