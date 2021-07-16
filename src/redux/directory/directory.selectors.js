import { createSelector } from "reselect";

const directorySelector = state => state.directory

export const selectDirectorySelector = createSelector(
    [directorySelector],
    directory => directory.sections
)