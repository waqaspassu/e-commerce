"use client"
import React from 'react'


import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import Link from 'next/link'
import { Footer, Media } from '../../../../payload/payload-types'
import { Button } from '../../Button'

export const FooterComponent = ({ footer }: { footer: Footer }) => {
    const navItems = footer?.navItems || []

    const path = usePathname()
    return (
        <footer className={noHeaderFooterUrls.includes(path) ? classes.hide : ''}>
            <Gutter>
                <ul className={classes.inclusions}>
                    {inclusions.map((inclusion, index) => <li key={index} >
                        <Image src={inclusion.icon} alt={inclusion.title} width={36} height={36} />
                        <h5>{inclusion.title}</h5>
                        <p>{inclusion.description}</p>
                    </li>)}
                </ul>
            </Gutter>
            <div className={classes.footer}>
                <Gutter>
                    <div className={classes.wrap}>
                        <Link href="">
                            <Image src="/logo-white.svg" alt="" width={170} height={50} />
                        </Link>
                        <p>{footer.copyright}</p>
                        <div className={classes.socialLinks}>
                            {
                                navItems.map((item,index) => {
                                    const Icons = item?.link?.icon as Media
                                    return (
                                        <Button  el='link' className={classes.socialLinkItem} newTab={true} key={item.link.label} href={item.link.url}>
                                            <Image src={Icons?.url} alt={item.link.label} className={classes.socailIcon} width={24} height={24} />
                                        </Button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Gutter>

            </div>
        </footer>
    )
}

export default FooterComponent
