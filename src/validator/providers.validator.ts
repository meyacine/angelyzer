import {Validator} from './validator';
import {elementNotInRightPlace, elementsNotInRightPlace} from '../template/element-not-in-right-place.template';
import {RuleEnum} from '../model/rule.enum';
import {Validation} from '../model/validation.model';

/**
 * A validator that checks if you've not thing like :
 * providers: [FooComponent, BarDirective, OtherPipe],
 * exports: [WrongProvider]
 */
export class ProvidersValidator implements Validator {
    /**
     * Detect bad providers
     * @param module
     * @param ast
     * @returns {any}
     */
    validate(module, ast?: any): Validation {
        const listOfProvidersViolations = [];
        for (const provider of module.providers) {
            if (provider.match(/.+(Component|Pipe|Directive|Module)$/)) {
                listOfProvidersViolations.push(elementNotInRightPlace(provider, 'providers'));
            }
        }
        if (listOfProvidersViolations.length > 0) {
            return new Validation({
                rule: RuleEnum.ELEMENT_CAN_NOT_BE_PROVIDED.toString(),
                className: module.name,
                error: elementsNotInRightPlace(listOfProvidersViolations)
            });
        }
        return null;
    }
}