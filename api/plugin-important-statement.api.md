## API Report File for "@edtr-io/plugin-important-statement"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { EditorPlugin } from '@edtr-io/plugin';
import { EditorPluginProps } from '@edtr-io/plugin';

// @public (undocumented)
export function createImportantStatementPlugin(): EditorPlugin<ImportantStatementState>;

// @public (undocumented)
export type ImportantStatementProps = EditorPluginProps<ImportantStatementState>;

// @public (undocumented)
export type ImportantStatementState = typeof importantStatementState;

// @public (undocumented)
export const importantStatementState: import("@edtr-io/internal__plugin-state").StateType<{
    plugin: string;
    state?: unknown;
}, string, {
    get(): string;
    id: string;
    render: (props?: import("@edtr-io/internal__plugin-state").PluginProps | undefined) => import("react").ReactNode;
    replace: (plugin?: string | undefined, state?: unknown) => void;
}>;


// (No @packageDocumentation comment for this package)

```