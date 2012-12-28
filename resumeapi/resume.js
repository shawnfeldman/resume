var Resume = function () {
    this.getSections = function () {
        return [
            {
                title: 'Objective',
                description: 'This is my objective',
                type: 'objective'
            }
        ];
    };

};

exports.Resume = Resume;
