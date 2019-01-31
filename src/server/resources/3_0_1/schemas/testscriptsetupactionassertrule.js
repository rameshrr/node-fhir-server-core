/**
 * @name exports
 * @summary TestScriptSetupActionAssertRule Class
 */
module.exports = class TestScriptSetupActionAssertRule {
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

		Object.defineProperty(this, '_ruleId', {
			enumerable: true,
			get: () => this.__data._ruleId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._ruleId = new Element(value);
			},
		});

		Object.defineProperty(this, 'ruleId', {
			enumerable: true,
			get: () => this.__data.ruleId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.ruleId = value;
			},
		});

		Object.defineProperty(this, 'param', {
			enumerable: true,
			get: () => this.__data.param,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TestScriptSetupActionAssertRuleParam = require('./testscriptsetupactionassertruleparam.js');
				this.__data.param = Array.isArray(value)
					? value.map(v => new TestScriptSetupActionAssertRuleParam(v))
					: [new TestScriptSetupActionAssertRuleParam(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TestScriptSetupActionAssertRule',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TestScriptSetupActionAssertRule';
	}

	toJSON() {
		return {
			_id: this._id && this._id.toJSON(),
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_ruleId: this._ruleId && this._ruleId.toJSON(),
			ruleId: this.ruleId,
			param: this.param && this.param.map(v => v.toJSON()),
		};
	}
};
