module.exports = function(grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['build', 'img'],
		uglify:
		{
			index:
			{
				options:
				{
					banner: '/*! MolView JavaScript build on <%= grunt.template.today("yyyy-mm-dd") %> */\n',
					compress: { drop_console: true }
				},
				src: [
					'src/js/Data.js',

					'src/js/lib/JSmol.min.js',

					//Misc
					'src/js/lib/jquery.min.js',
					'src/js/lib/jquery.hotkeys.js',
					'src/js/lib/Detector.js',
					'src/js/Utility.js',

					//Ketcher
					'src/js/m2s/prototype.js',
					'src/js/m2s/util/common.js',
					'src/js/m2s/util/vec2.js',
					'src/js/m2s/util/set.js',
					'src/js/m2s/util/map.js',
					'src/js/m2s/util/pool.js',
					'src/js/m2s/chem/element.js',
					'src/js/m2s/chem/struct.js',
					'src/js/m2s/chem/molfile.js',
					'src/js/m2s/chem/sgroup.js',
					'src/js/m2s/chem/struct_valence.js',
					'src/js/m2s/chem/dfs.js',
					'src/js/m2s/chem/cis_trans.js',
					'src/js/m2s/chem/stereocenters.js',
					'src/js/m2s/chem/smiles.js',
					'src/js/m2s/chem/inchi.js',

					//MolEdit
					'src/js/moledit/MolEdit_constants.js',
					'src/js/moledit/MolEdit_objects.js',
					'src/js/moledit/MolEdit_utility.js',
					'src/js/moledit/MEChemical.js',
					'src/js/moledit/MolEdit.js',
					'src/js/moledit/MolEdit_core.js',
					'src/js/moledit/MolEdit_events.js',

					//GLmol
					'src/js/lib/three.min.js',
					'src/js/lib/GLmol.js',

					//ChemDoodle
					'src/js/lib/ChemDoodleWeb.js',

					//FileSaver
					'src/js/lib/Blob.js',
					'src/js/lib/FileSaver.js',

					//Periodic Table
					'src/js/lib/PeriodicTable.js',

					//MolView data
					'src/datasets/PDBNames.js',
					'src/datasets/MineralNames.js',

					//MolView source
					'src/js/Preferences.js',
					'src/js/History.js',
					'src/js/Progress.js',
					'src/js/Messages.js',
					'src/js/Sketcher.js',
					'src/js/GLmolPlugin.js',
					'src/js/JSmolPlugin.js',
					'src/js/CDWPlugin.js',
					'src/js/Model.js',
					'src/js/SearchGrid.js',
					'src/js/Request.js',
					'src/js/Loader.js',
					'src/js/Actions.js',
					'src/js/Share.js',
					'src/js/Link.js',
					'src/js/InfoCard.js',
					'src/js/Spectroscopy.js',
					'src/js/Autocomplete.js',
					'src/js/MolView.js'
				],
				dest: 'build/<%= pkg.name %>.min.js'
			},
			embed:
			{
				options:
				{
					banner: '/*! MolView JavaScript build on <%= grunt.template.today("yyyy-mm-dd") %> */\n',
					compress: { drop_console: true }
				},
				src: [
					'src/js/Data.js',
					'src/js/lib/JSmol.min.js',
					'src/js/lib/jquery.min.js',
					'src/js/lib/Detector.js',
					'src/js/lib/three.min.js',
					'src/js/lib/GLmol.js',
					'src/js/lib/ChemDoodleWeb.js',
					'src/js/Utility.js',
					'src/js/Preferences.js',
					'src/js/Progress.js',
					'src/js/Messages.js',
					'src/js/GLmolPlugin.js',
					'src/js/JSmolPlugin.js',
					'src/js/CDWPlugin.js',
					'src/js/Model.js',
					'src/js/Request.js',
					'src/js/Loader.Embed.js',
					'src/js/MolView.Embed.js'
				],
				dest: 'build/<%= pkg.name %>.embed.min.js'
			}
		},
		replace:
		{
			index:
			{
				src: 'build/<%= pkg.name %>.min.js',
				dest: 'build/<%= pkg.name %>.min.js',
				replacements: [{ from: '"use strict";', to: '' }]
    		},
			embed:
			{
				src: 'build/<%= pkg.name %>.embed.min.js',
				dest: 'build/<%= pkg.name %>.embed.min.js',
				replacements: [{ from: '"use strict";', to: '' }]
			}
		},
		less:
		{
			index:
			{
				options:
				{
					compress: true,
					cleancss: true
				},
				src: [
					'src/less/vars.less',
					'src/less/form.less',
					'src/less/global.less',
					'src/less/layout.less',
					'src/less/menu.less',
					'src/less/menu-theme.less',
					'src/less/sketcher.less',
					'src/less/model.less',
					'src/less/search.less',
					'src/less/messages.less',
					'src/less/dialogs.less',
					'src/less/help.less',
					'src/less/share.less',
					'src/less/periodictable.less',
					'src/less/chemicaldata.less',
					'src/less/autocomplete.less',
					'src/less/welcome.less'
				],
				dest: 'build/<%= pkg.name %>.min.css'
			},
			embed:
			{
				options:
				{
					compress: true,
					cleancss: true
				},
				src: [
					'src/less/var.less',
					'src/less/model.less',
					'src/less/messages.less',
					'src/less/embed.less'
				],
				dest: 'build\/<%= pkg.name %>.embed.min.css'
			},
			desktop:
			{
				options:
				{
					compress: true,
					cleancss: true
				},
				src: [
					'src/less/var.less',
					'src/less/menu-desktop.less',
					'src/less/smooth.less',
					'src/less/hover.less',
					'src/less/active.less'
				],
				dest: 'build\/<%= pkg.name %>.desktop.min.css'
			},
			touch:
			{
				options:
				{
					compress: true,
					cleancss: true
				},
				src: [
					'src/less/var.less',
					'src/less/menu-touch.less',
					'src/less/active.less'
				],
				dest: 'build\/<%= pkg.name %>.touch.min.css'
			},
			page:
			{
				options:
				{
					compress: true,
					cleancss: true
				},
				src: [
					'src/less/vars.less',
					'src/less/page.less'
				],
				dest: 'build/<%= pkg.name %>.page.min.css'
			},
		},
		cssmin:
		{
			index:
			{
				src: 'build/<%= pkg.name %>.min.css',
				dest: 'build/<%= pkg.name %>.min.css'
			},
			embed:
			{
				src: 'build/<%= pkg.name %>.embed.min.css',
				dest: 'build/<%= pkg.name %>.embed.min.css'
			},
			desktop:
			{
				src: 'build/<%= pkg.name %>.desktop.min.css',
				dest: 'build/<%= pkg.name %>.desktop.min.css'
			},
			touch:
			{
				src: 'build/<%= pkg.name %>.touchmin.css',
				dest: 'build/<%= pkg.name %>.touchmin.css'
			},
			mobile:
			{
				src: 'build/<%= pkg.name %>.mobile.min.css',
				dest: 'build/<%= pkg.name %>.mobile.min.css'
			},
			page:
			{
				src: 'build/<%= pkg.name %>.page.min.css',
				dest: 'build/<%= pkg.name %>.page.min.css'
			},
		},
		svgmin:
		{
			options:
			{
				plugins: [
				]
			},
			dist:
			{
				files: [
					{
						expand: true,
						cwd: 'src/svg',
						src: ['action/*', 'bond/*', 'frag/*', 'layout/*', 'misc/*'],
						dest: 'img/',
						ext: '.svg'
					}]
			}
		},
		copy:
		{
			img:
			{
				files: [
					{ expand: true, flatten: true, src: 'docs/img/*', dest: 'img/help/', filter: 'isFile' },
					{ expand: true, flatten: true, src: 'src/png/*', dest: 'img/', filter: 'isFile' },
					{ expand: true, flatten: true, src: 'src/png/icon/*', dest: 'img/icon/', filter: 'isFile' },
					{ src: 'src/png/image.png', dest: 'img/image.png' },
					{ src: 'src/svg/icon/48.svg', dest: 'img/logo.svg' },
					{ src: 'src/svg/icon/brand.svg', dest: 'img/brand.svg' }
				]
			}
		},
		watch:
		{
			scripts: {
				files: ['src/less/*.less'],
				tasks: ['less'],
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('jsminify', ['uglify', 'replace']);
	grunt.registerTask('default', ['clean', 'uglify', 'replace', 'less', 'svgmin', 'copy']);
};
