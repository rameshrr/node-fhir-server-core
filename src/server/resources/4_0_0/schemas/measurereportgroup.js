/**
 * @name exports
 * @summary MeasureReportGroup Class
 */
module.exports = class MeasureReportGroup {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.code = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'population', {
			enumerable: true,
			get: () => this.__data.population,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MeasureReportGroupPopulation = require('./measurereportgrouppopulation.js');
				this.__data.population = Array.isArray(value)
					? value.map(v => new MeasureReportGroupPopulation(v))
					: [new MeasureReportGroupPopulation(value)];
			},
		});

		Object.defineProperty(this, 'measureScore', {
			enumerable: true,
			get: () => this.__data.measureScore,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.measureScore = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'stratifier', {
			enumerable: true,
			get: () => this.__data.stratifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MeasureReportGroupStratifier = require('./measurereportgroupstratifier.js');
				this.__data.stratifier = Array.isArray(value)
					? value.map(v => new MeasureReportGroupStratifier(v))
					: [new MeasureReportGroupStratifier(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MeasureReportGroup',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MeasureReportGroup';
	}

	toJSON() {
		return {
			_id: this._id && this._id.toJSON(),
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			code: this.code && this.code.toJSON(),
			population: this.population && this.population.map(v => v.toJSON()),
			measureScore: this.measureScore && this.measureScore.toJSON(),
			stratifier: this.stratifier && this.stratifier.map(v => v.toJSON()),
		};
	}
};
