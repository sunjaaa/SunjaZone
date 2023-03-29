import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";

import { content } from "@/constants";

interface NavLinkProps {
  href: string;
  children: string;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  if (isActive) {
    return <FocusedNavLink href={href}>{children}</FocusedNavLink>;
  } else {
    return <UnFocusedNavLink href={href}>{children}</UnFocusedNavLink>;
  }
};

export default NavLink;

const UnFocusedNavLink = styled(Link)`
  font-size: 1rem;
  text-decoration-line: none;
  text-shadow: -0.1rem 0 ${content.gray.a1}, 0 0.1rem ${content.gray.a1},
    0.1rem 0 ${content.gray.a1}, 0 -0.1rem ${content.gray.a1};
  color: white;
  &:hover {
    color: ${content.primary.common};
  }
`;
const FocusedNavLink = styled(Link)`
  font-size: 1.05rem;
  text-decoration-line: none;
  text-shadow: -0.1rem 0 ${content.gray.a1}, 0 0.1rem ${content.gray.a1},
    0.1rem 0 ${content.gray.a1}, 0 -0.1rem ${content.gray.a1};
  color: ${content.primary.common};
  font-weight: bold;
`;
