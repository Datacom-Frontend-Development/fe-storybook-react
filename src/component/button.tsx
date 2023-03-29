import React from 'react';
import { Button, rem, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCopy, IconCheck } from '@tabler/icons-react';

interface Props {
    children?: React.ReactNode;
    color?: 'red' | 'green';
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'submit' | 'button' | 'reset';
};

const ExButton :  React.FC<Props> = (props) => {
    const clipboard = useClipboard();
    return (
      <Tooltip
        label="Link copied!"
        offset={5}
        position="bottom"
        radius="xl"
        transitionProps={{ duration: 100, transition: 'slide-down' }}
        opened={clipboard.copied}
      >
        <Button
         {...props}
          variant="light"
          rightIcon={
            clipboard.copied ? (
              <IconCheck size="1.2rem" stroke={1.5} />
            ) : (
              <IconCopy size="1.2rem" stroke={1.5} />
            )
          }
          radius="xl"
          size="md"
          styles={{
            root: { paddingRight: rem(14), height: rem(48) },
            rightIcon: { marginLeft: rem(22) },
          }}
        />
      </Tooltip>
    )
};

export default Button;