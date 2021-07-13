import React from "react";
import { ArrowDown, ArrowRight, DownloadCloud, ChevronDown, ChevronRight, ChevronLeft, Download } from 'react-feather';
import { Link } from 'react-router-dom'
import { Link as ReactScrollLink } from 'react-scroll'

import './index.scss'
import Loading from '../Loading'

const Button = ({
  scrollLink = false,
  to = "",
  type = 1,
  width = '100%',
  height = '60px',
  maxWidth = "auto",
  marginRight = "initial",
  fontSize = '14px',
  arrowDown = false,
  arrowRight = false,
  downloadCloud = false,
  chevronDown = false,
  chevronRight = false,
  chevronLeft = false,
  download = false,
  children,
  onClick,
  loading,
  submit = false,
  green = false,
  href = false,
  ...props
}) => {
  let style = {
    width,
    height,
    minHeight: height,
    maxWidth,
    marginRight,
    fontSize
  }

  if (scrollLink) {
    return (
      <ReactScrollLink
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        style={style}
        className={`button button--type-${type}`}
        onClick={onClick}
        href='mailto:contato@semprocesso.com.br'
        {...props}>
        {
          loading ?
            <Loading color={green && 'green'} />
            :
            <span>
              {children}
              {arrowDown &&
                <ArrowDown size={30} />
              }
              {arrowRight &&
                <ArrowRight size={30} />
              }
              {downloadCloud &&
                <DownloadCloud size={20} />
              }
              {chevronDown &&
                <ChevronDown size={20} />
              }
              {chevronRight &&
                <ChevronRight size={20} />
              }
              {chevronLeft &&
                <ChevronLeft size={20} />
              }
              {download &&
                <Download size={20} />
              }
            </span>
        }
        {submit && <button type='submit'></button>}
      </ReactScrollLink>
    )
  }
  return (
    <Link
      to={to}
      style={style}
      className={`button button--type-${type}`}
      onClick={onClick}
      {...props}>
      {
        loading ?
          <Loading color={green && 'green'} />
          :
          <span>
            {children}
            {arrowDown &&
              <ArrowDown size={30} />
            }
            {arrowRight &&
              <ArrowRight size={30} />
            }
            {downloadCloud &&
              <DownloadCloud size={20} />
            }
            {chevronDown &&
              <ChevronDown size={20} />
            }
            {chevronRight &&
              <ChevronRight size={20} />
            }
            {chevronLeft &&
              <ChevronLeft size={20} />
            }
            {download &&
              <Download size={20} />
            }
          </span>
      }
      {submit && <button type='submit'></button>}
    </Link>
  )
}

export default Button
