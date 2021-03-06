import React from 'react';
import { useLocation } from 'react-router-dom';
import { useOvermind } from 'app/overmind';
import { Element } from '@codesandbox/components';
import css from '@styled-system/css';

import { NewTeam } from 'app/pages/common/NewTeam';
import { TeamSettings } from './TeamSettings';
import { UserSettings } from './UserSettings';
import { Invite } from './Invite';

export const Settings = () => {
  const { state } = useOvermind();
  const location = useLocation();

  const getComponent = () => {
    if (location.pathname.includes('settings/new')) {
      return NewTeam;
    }
    if (location.pathname.includes('invite')) {
      return Invite;
    }
    if (state.activeTeam === state.personalWorkspaceId) {
      return UserSettings;
    }

    return TeamSettings;
  };

  const Component = getComponent();

  return (
    <Element css={css({ width: '100%', maxWidth: 1280 })} marginY={10}>
      <Component />
    </Element>
  );
};
