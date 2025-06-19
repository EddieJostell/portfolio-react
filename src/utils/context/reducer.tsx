/* import { cloneDeep } from 'lodash-es';
import { MenuDataItem, MenuHistory, MenuState } from './menuContext';

export enum ActionType {
    ToggleSearch = 'ToggleSearch',
    CloseSearch = 'CloseSearch',
    OpenMenu = 'OpenMenu',
    CloseMenu = 'CloseMenu',
    NextLevel = 'NextLevel',
    PreviousLevel = 'PreviousLevel',
    MenuHistoryPush = 'MenuHistoryPush',
    MenuHistoryPop = 'MenuHistoryPop',
    OpenSubMenu = 'OpenSubMenu',
    CloseSubMenu = 'CloseSubMenu',
}

export type Action =
    | { type: ActionType.ToggleSearch }
    | { type: ActionType.CloseSearch }
    | { type: ActionType.OpenMenu; payload: MenuDataItem[] }
    | { type: ActionType.CloseMenu }
    | {
          type: ActionType.NextLevel;
          payload: { menuDataItem: MenuDataItem; menuHistory: MenuHistory };
      }
    | {
          type: ActionType.PreviousLevel;
          payload: { menuDataItem: MenuDataItem; menuHistory: MenuHistory[] };
      }
    | { type: ActionType.MenuHistoryPush; payload: MenuHistory }
    | { type: ActionType.MenuHistoryPop; payload: MenuHistory }
    | { type: ActionType.OpenSubMenu; payload: { data: MenuDataItem; index: number } }
    | { type: ActionType.CloseSubMenu };

export const menuReducer = (state: MenuState, action: Action) => {
    switch (action.type) {
        case ActionType.ToggleSearch:
            state.desktop.isOpen = !state.desktop.isOpen;
            state.desktop.openSubMenu = null;
            state.mobile.searchOpen = !state.mobile.searchOpen;
            state.mobile.mobileMenuOpen = false;
            return cloneDeep(state);
        case ActionType.OpenSubMenu:
            state.desktop.isOpen = false;
            state.desktop.openSubMenu = action.payload;
            return cloneDeep(state);
        case ActionType.CloseSubMenu:
            state.desktop.openSubMenu = null;
            return cloneDeep(state);
        case ActionType.CloseSearch:
            state.mobile.searchOpen = false;
            return cloneDeep(state);
        case ActionType.OpenMenu:
            state.mobile.mobileMenuOpen = true;
            state.mobile.searchOpen = false;
            state.mobile.selectedMenuItem = action.payload.find((item) => item.selected) as MenuDataItem;
            state.mobile.currentLevel = state.mobile.selectedMenuItem;
            state.mobile.menuHistory = [{ level: state.mobile.selectedMenuItem, focus: state.mobile.selectedMenuItem.text, index: 0 }];
            return cloneDeep(state);
        case ActionType.CloseMenu:
            state.mobile.mobileMenuOpen = false;
            return cloneDeep(state);
        case ActionType.NextLevel: {
            const { menuDataItem, menuHistory } = action.payload;
            state.mobile.currentLevel = menuDataItem;
            state.mobile.menuHistory.push(menuHistory);
            return cloneDeep(state);
        }
        case ActionType.PreviousLevel: {
            const { menuDataItem, menuHistory } = action.payload;
            state.mobile.currentLevel = menuDataItem;
            state.mobile.menuHistory = menuHistory;
            return cloneDeep(state);
        }
        default:
            return state;
    }
};
 */
