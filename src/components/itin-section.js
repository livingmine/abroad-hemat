import React from 'react'
import PropTypes from 'prop-types'

function ItinSection({ title }) {

    let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies urna ligula, vitae semper urna lacinia vitae. Praesent risus felis, convallis at purus et, aliquet eleifend metus. Mauris dictum ligula at lacus varius ultrices. Etiam rutrum est scelerisque turpis pretium, in porta ligula molestie. In accumsan eu arcu id ultricies. Integer felis nunc, efficitur vitae ante a, finibus dictum nisi. Vivamus ornare lectus nec nunc blandit suscipit. Ut et odio rutrum, luctus tellus nec, consectetur justo. Phasellus lobortis consectetur nisi, non tempus urna cursus et. Vestibulum tincidunt lectus eros, id consectetur mauris pharetra sit amet. Sed id turpis arcu. Vestibulum aliquam dolor augue, eu vehicula est convallis in. Cras ac libero sapien.Nam et urna euismod, scelerisque ligula et, semper urna.Sed interdum lacinia odio, ut egestas erat mattis id.Pellentesque bibendum et nisl et elementum.Morbi malesuada tellus lacinia eros consectetur, eleifend tempor nibh ultricies.In quis massa a urna faucibus mollis.Donec lobortis pretium suscipit.Phasellus eu nunc sed diam vehicula mattis et sed lorem.Nullam et orci lobortis lectus elementum lobortis.Nulla odio eros, dictum eu nibh euismod, sollicitudin placerat nisl.Nulla efficitur rutrum diam eu lacinia.Aliquam et pellentesque tellus.'

    return (
        <div className="w-full flex sm:flex-row flex-col flex-wrap h-auto p-4 bg-white">
            <div className="w-full justify-center flex sm:flex-col px-4 sm:w-2/6 xl:w-1/6 py-2">
                <p className="break-words font-bold mr-1 text-xl lg:text-4xl">{title}</p>
            </div>
            <div className="w-full sm:w-4/6 xl:w-5/6">
                <hr className="border-2 border-black w-5/5 m-auto mb-4"></hr>
                <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
            </div>
        </div>
    );
}

ItinSection.propTypes = {
    title: PropTypes.string
}

export default ItinSection;