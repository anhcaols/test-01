import './Main.css'
import classNames from 'classnames'
import images from '../../assets'
function Main() {
    return (
        <div className="main">
            {/* Content - Head */}
            <div className={classNames('content-head')}>
                <h3>Lorem ipsum dolor sit asmet?</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat.
                    Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis.
                    Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi.
                    Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
                    convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue
                    tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
                </p>
            </div>
            {/* Content - Main List */}
            <div className={classNames('content-main-list')}>
                <div className={classNames('content-main-item')}>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <div className={classNames('content-main-body')}>
                        <p>
                            <img className={classNames('main-item__img')} src={images.icon1} alt="" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus
                            libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum
                            velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam
                            egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
                            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus
                            bibendum congue. Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                </div>

                <div className={classNames('content-main-item')}>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <div className={classNames('content-main-body')}>
                        <p>
                            <img className={classNames('main-item__img')} src={images.icon2} alt="" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus
                            libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum
                            velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam
                            egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
                            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus
                            bibendum congue. Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                </div>

                <div className={classNames('content-main-item')}>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <div className={classNames('content-main-body')}>
                        <p>
                            <img className={classNames('main-item__img')} src={images.icon3} alt="" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus
                            libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum
                            velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam
                            egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
                            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus
                            bibendum congue. Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
